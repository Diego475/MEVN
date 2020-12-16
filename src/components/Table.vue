<template>
  <div>
    <div v-if="people.length">
      <table class="table table-dark text-center table-hover">
        <caption>
          <button
            class="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Создать новых пользователей
          </button>
        </caption>
        <thead>
          <tr>
            <th>№</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Дата рождения</th>
            <th>Возраст</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="(item, i) in people" :key="i">
            <th>{{ item.id }}</th>
            <th>{{ item.surname }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.middle_name }}</th>
            <th>{{ item.birth }}</th>
            <th>{{ item.age }}</th>
            <th>
              <button class="btn btn-primary">
                <i class="material-icons">edit</i>
              </button>
            </th>
            <th>
              <button class="btn btn-danger">
                <i class="material-icons">delete</i>
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <NotFoundTable />
    </div>
    
  </div>
</template>




<script>
import NotFoundTable from "./NotFoundTable";

export default {
  components: {
    NotFoundTable,
  },

  people: [],
  data() {
    return {
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
