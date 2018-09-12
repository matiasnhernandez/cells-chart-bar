class CellsChartBar extends Polymer.Element {

  static get is() {
    return 'cells-chart-bar';
  }

  static get properties() {
    return {
      tipo: {
        type: String,
        value: 'bar'
      },
      titulo: {
        type: String,
        value: 'Chart'
      },
      titulos: Array,
      colores: Array,
      datos: Array
    };
  }

  cargar() {
    var dataset = [];
    for (let index = 0; index < this.titulos.length; index++) {
      const element = this.titulos[index];
      var objeto = {label: this.titulos[index], data: [ this.datos[index] ], backgroundColor: this.colores[index], borderColor: 'rga(0,0,0)', borderWidth: 1};
      dataset.push(objeto);
    }

    var ctx = this.$.myChart.getContext('2d');
    var config = {
      type: 'bar',
      data: {
        datasets: dataset
      },
      options: {
        title: {
          display: true,
          text: this.titulo
        },
        scales: {
          yAxes: [ {
            ticks: {
              beginAtZero: true
            }
          } ]
        }
      }
    };

    var chart = new Chart(ctx, config);
    this.$.myChart = chart;
  }

  connectedCallback() {
    console.log('connectedCallback');
    super.connectedCallback();
    this.cargar();
  }
}

customElements.define(CellsChartBar.is, CellsChartBar);