<script lang="ts">
import Card from './lib/Card.svelte'
import { users } from './users'
import type { IUsers } from './users'
let people: IUsers = users;
function downOrUp(e,sort_index,move){
  let person;
  if (move === 'down' && sort_index === 1) {
    person = people.map((item: IUsers) => {
      if (item.sort_index === sort_index) {
        return {
          ...item,
          sort_index: sort_index + 1,
        } 
      } 
      if (item.sort_index === sort_index + 1) {
        return {
          ...item,
          sort_index: (sort_index + 1) - 1,
        } 
      } 
      return item;
    })
  }
  if (move === 'up' && sort_index === people.length) {
    person = people.map((item: IUsers) => {
      if (item.sort_index === sort_index) {
        return {
          ...item,
          sort_index: sort_index - 1,
        } 
      } 
      if (item.sort_index === sort_index - 1) {
        return {
          ...item,
          sort_index: (sort_index - 1) + 1,
        } 
      } 
      return item;
    })
  }
  if (sort_index !== 1 && sort_index !== people.length) {
    if (move === 'up') {
      person = people.map((item: IUsers) => {
        if (item.sort_index === sort_index) {
          return {
            ...item,
            sort_index: sort_index - 1,
          } 
        } 
        if (item.sort_index === sort_index - 1) {
          return {
            ...item,
            sort_index: (sort_index - 1) + 1,
          } 
        } 
        return item;
      })
    }
    if (move === 'down') {
      person = people.map((item: IUsers) => {
        if (item.sort_index === sort_index) {
          return {
            ...item,
            sort_index: sort_index + 1,
          } 
        } 
        if (item.sort_index === sort_index + 1) {
          return {
            ...item,
            sort_index: (sort_index + 1) - 1,
          } 
        } 
        return item;
      })
    }
  }
  people = [...person].sort(function(a,b){
    if (a.sort_index > b.sort_index) {
      return 1; 
    }
    if (a.sort_index < b.sort_index) {
      return -1; 
    }
    return 0;
  });
}
</script>

<main class="container mt-3">
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h4 class="text-center">Up 1 Or Down 1 Sort</h4>
      {#each people as user, index}
        <Card user={user} total={users.length} index={index} downOrUp={downOrUp} sort_index={user.sort_index} />
      {/each}
    </div>
    <div class="col-1"></div>
  </div>
</main>

