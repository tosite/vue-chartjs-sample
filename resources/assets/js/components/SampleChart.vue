<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['data-1','data-2','data-3'],
      datasets: [{
        label: 'sample',
        backgroundColor: ['#ddd', '#bbb', "#999S"],
        data: [300, 400, 150],
      }]
    })
  }
}
</script>