<template>
  <div class="container pt-5">
    <div class="text-center pb-3">
      <h1>Редактировать пользователя}</h1>
    </div>
    <form>
      <div class="form-row">
        <div class="col">
          <label for="surname">Фамилия</label>
          <input type="text" id="surname" v-bind:value="people[$route.params.id].surname" class="form-control" />
        </div>
        <div class="col">
          <label for="name">Имя</label>
          <input type="text" id="name" v-bind:value="people[$route.params.id].name" class="form-control" />
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <label for="middle_name">Отчество</label>
          <input type="text" id="middle_name" v-bind:value="people[$route.params.id].middle_name" class="form-control" />
        </div>
        <div class="col">
          <label for="birth">Дата рождения</label>
          <input type="date" v-model="date" class="form-control" id="birth" />
          <small class="text-muted">Пользователю лет: <span>19</span></small>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col d-flex justify-content-end">
          <button class="btn btn-success btn-lg">Сохранить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  people: [],
  data() {
    return {
      date: [],
      people: [
        {
          id: "1",
          surname: "Некрасов",
          name: "Петр",
          middle_name: "Антонович",
          birth: "17.01.1996",
          age: "24",
        },
        {
          id: "2",
          surname: "Игнатов",
          name: "Ефрем",
          middle_name: "Михайлович",
          birth: "22.01.1996",
          age: "22",
        },
      ],
    };
  },
};
</script>

