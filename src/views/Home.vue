<template>
  <div class="home">
    <div class="container pt-5" v-if="people.length">
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
          <tr scope="row" v-for="person in people" :key="person">
            <th>{{ person.id }}</th>
            <th>{{ person.surname }}</th>
            <th>{{ person.name }}</th>
            <th>{{ person.middle_name }}</th>
            <th>{{ person.birth }}</th>
            <th>{{ person.id }}</th>
            <th><button class="btn btn-primary"><i class="material-icons">edit</i></button></th>
            <th><button class="btn btn-danger"><i class="material-icons">delete</i></button></th>
          </tr>
        </tbody>
      </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Создать новых пользователей</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Закрыть
              </button>
              <button type="button" class="btn btn-success">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5" v-else>
      <div class="alert alert-danger">Извините, но данные не получены</div>
    </div>
  </div>
</template>

<script>
export default {
  people: [],
  data() {
    return {
      people: [
        {
          id: "1",
          surname: "Романов",
          name: "Кирилл",
          middle_name: "Сергеевич",
          birth: "12.12.12",
        },
        {
          id: "2",
          surname: "Романов",
          name: "Кирилл",
          middle_name: "Сергеевич",
          birth: "12.12.12",
        },
      ],
    };
  },
};
</script>
