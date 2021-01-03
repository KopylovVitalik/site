import gsap from 'gsap';
import { WIN_WIDTH, widthSM, OPEN } from '../constants';
import { emitter } from './_emitter';

export function currency_toggler_init(coins) {
  $('.js-currency-active').on('click', () =>
    $('.js-currency-buttons').toggleClass(OPEN)
  );
  $('.js-currency-variant').on('click', function() {
    const activeBtn = $('[data-currency-active]');
    const currentBtn = $(this);
    const activeBtnSpan = activeBtn.find('span');
    const currentBtnSpan = currentBtn.find('span');

    const currentCurrency = activeBtn.attr('data-currency-active');
    const currentCurrencyMark = activeBtnSpan.text();
    const newCurrency = currentBtn.attr('data-currency');
    const newCurrencyMark = currentBtnSpan.text();

    emitter.emit('currency_changed', {
      currency: newCurrency,
      currencyMark: newCurrencyMark,
    });

    if ($('[data-crypto-widget]').length) {
      $('[data-crypto-id]').each((i, el) => {
        const id = $(el).attr('data-crypto-id');
        const obj = coins.find((el) => el.id === id);

        const price = $(el).find('[data-currency-price]');
        const newPrice = obj['market_data']['current_price'][newCurrency];

        const percentage = $(el).find('[data-currency-percentage]');
        const newPercentage =
          obj['market_data']['price_change_percentage_1h_in_currency'][
            newCurrency
          ];
        if (!newPrice || !newPercentage) return;
        gsap
          .timeline()
          .to([price, percentage], {
            y: '-=10',
            opacity: 0.1,
            duration: 0.15,
            onComplete: () => {
              price.text(`${newCurrencyMark}${newPrice}`);
              percentage.text(newPercentage);
            },
          })
          .to([price, percentage], {
            y: '+=10',
            opacity: 1,
            duration: 0.15,
          });
      });
    }

    if (WIN_WIDTH < widthSM) {
      $('.js-currency-buttons').removeClass(OPEN);
      activeBtn.attr('data-currency-active', newCurrency);
      activeBtnSpan.text(newCurrencyMark);
      currentBtn.attr('data-currency', currentCurrency);
      currentBtnSpan.text(currentCurrencyMark);
    } else {
      gsap
        .timeline()
        .to(activeBtnSpan, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          onComplete() {
            activeBtn.attr('data-currency-active', newCurrency);
            activeBtnSpan.text(newCurrencyMark);
          },
        })
        .to(activeBtnSpan, { scale: 1, opacity: 1, duration: 0.3 });

      gsap
        .timeline()
        .to(currentBtnSpan, {
          scale: 4,
          opacity: 0,
          duration: 0.3,
          onComplete() {
            currentBtn.attr('data-currency', currentCurrency);
            currentBtnSpan.text(currentCurrencyMark);
          },
        })
        .to(currentBtnSpan, { scale: 1, opacity: 1, duration: 0.3 });
    }
  });
}



import dt from 'datatables.net';
import responsive from 'datatables.net-responsive';
import { currency_toggler_init } from './_currency_toggler';
import { emitter } from './_emitter';

const page_name = $('body').data('page');

if (page_name === 'kursy-kriptovalyut') {
  var currency_table = $('#crypto-table').DataTable({
    pageLength: 50,
    ordering: false,
    info: false,
    bLengthChange: false,
    pagingType: 'simple',
    dom: '<"top"p<"clear">>rt<"bottom"p<"clear">>',
    retrieve: true,
    language: {
      zeroRecords: 'Не найдено таких криптовалют',
      paginate: {
        next:
          '<span data-text="Следующие 50"><span class="paginate_button_inner">Следующие 50</span></span>',
        previous:
          '<span data-text="Предыдущие 50"><span class="paginate_button_inner">Предыдущие 50</span></span>',
      },
    },
  });

  new $.fn.dataTable.Responsive(currency_table);

  currency_table.on('draw', function() {
    currency_table.responsive.recalc();
  });
  currency_table.on('page.dt', function() {
    var info = currency_table.page.info();
    console.log(info);
  });

  var parsedResult;

  // emitter.on('currency_changed', ({ currency }) => {
  //   currency_table.rows().every(function(rowIdx, tableLoop, rowLoop) {
  //     var d = this.data();
  //     const el = this.node();
  //     const elCurrency = el ? el.dataset.cryptoId : null;
  //     const obj = parsedResult.find((el) => el.id === elCurrency);
  //     if (!obj) return;

  //     d['1'] = obj['market_data']['market_cap'][currency];
  //     d['2'] = obj['market_data']['current_price'][currency];
  //     d['3'] = obj['market_data']['total_volume'][currency];
  //     this.invalidate();
  //   });
  //   console.log(currency_table.rows());
  //   currency_table.draw();
  // });

  emitter.on('currency_changed', ({ currency, currencyMark }) => {
    currency_table.rows().every(function(rowIdx, tableLoop, rowLoop) {
      var d = this.data();
      const el = this.node();
      const elCurrency = el ? el.dataset.cryptoId : null;
      const obj = parsedResult.find((el) => el.id === elCurrency);

      if (typeof obj !== 'object') return;

      const cap = obj['market_data']['market_cap'][currency];
      if (!cap) return;
      const volume = obj['market_data']['total_volume'][currency];
      const price = obj['market_data']['current_price'][currency];

      const capEl = $(el).find('[data-currency-cap]');
      const volumeEl = $(el).find('[data-currency-volume]');
      const priceEl = $(el).find('[data-currency-price]');

      priceEl.text(`${currencyMark}${price}`);
      volumeEl.text(`${currencyMark}${volume}`);
      capEl.text(`${currencyMark}${cap}`);

      d['1'] = cap;
      d['2'] = price;
      d['3'] = volume;
      this.invalidate();
      // this.child.hide();
    });
    currency_table.draw();
  });

  $.ajax({
    url: app.ajaxurl,
    type: 'POST',
    dataType: 'json',
    data: {
      action: 'currency_table',
      _ajax_nonce: app.nonce,
    },
  }).always(function(result) {
    parsedResult = JSON.parse(result.data);
    currency_toggler_init(parsedResult);
  });
  $('#table-search').on('keyup click', function() {
    currency_table.search($('#table-search').val()).draw();
  });
  $('.js-currency-search-reset').on('keyup click', function() {
    $('#table-search').val('');
    currency_table.search('').draw();
  });
}
