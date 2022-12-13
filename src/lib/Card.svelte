<script lang="ts">
import type { IUser } from '../users'
import ArrowDownOrUp from './ArrowDownOrUp.svelte'
export let user: IUser
export let total: number;
export let index: number;
export let downOrUp: Function;
export let sort_index: number;
</script>

<div class="card mb-2">
  <div class="card-body d-flex justify-content-between">
    <div>
      {user.name} {user.email}
    </div>
    <div class="d-flex flex-row">
      {#if index + 1 === total}
        <ArrowDownOrUp move={'up'} downOrUp={downOrUp} sort_index={sort_index} />
      {/if}
      {#if index !== 0 && index + 1 !== total}
        <ArrowDownOrUp move={'up'} downOrUp={downOrUp} sort_index={sort_index} />
        <ArrowDownOrUp move={'down'} downOrUp={downOrUp} sort_index={sort_index} />
      {/if}
      {#if index === 0}
        <ArrowDownOrUp move={'down'} downOrUp={downOrUp} sort_index={sort_index} />
      {/if}
    </div>
  </div>
</div>
