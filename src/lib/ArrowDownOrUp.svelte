<script lang="ts">
import ArrowDown from '../assets/arrow-down.svg?component'
import ArrowUp from '../assets/arrow-up.svg?component'
export let move: string = 'up'
export let downOrUp: Function
export let sort_index: number;
</script>

{#if move === 'up'}
  <button on:click={(e) => downOrUp(e,sort_index,move)} type="button" class="btn btn-sm">
    <ArrowUp width={20} height={20} />
  </button>
{/if}
{#if move === 'down'}
  <button on:click={(e) => downOrUp(e,sort_index,move)} type="button" class="btn btn-sm">
    <ArrowDown width={20} height={20} />
  </button>
{/if}
