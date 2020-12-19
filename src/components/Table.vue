<template>
  <div>
    <div v-if="people.length">
      <table class="table table-dark text-center table-hover">
        <CaptionTable />
        <div
          class="modal fade text-dark"
          id="modalCreate"
          tabindex="-1"
          aria-labelledby="modalCreateLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalCreateLabel">
                  Создание пользователя
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-left">
                <form>
                  <div class="form-group">
                    <label for="surname">Фамилия</label>
                    <input type="text" class="form-control" id="surname" />
                  </div>
                  <div class="form-group">
                    <label for="name">Имя</label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                  <div class="form-group">
                    <label for="middle_name">Отчество</label>
                    <input type="text" class="form-control" id="middle_name" />
                  </div>
                  <div class="form-group">
                    <label for="birth">Дата рождения</label>
                    <input
                      type="date"
                      v-model="date"
                      class="form-control"
                      id="birth"
                    />
                  </div>
                  <div v-if="date.length">
                    <small class="form-text text-muted">
                      Пользователю лет:
                      {{
                        new Date().getFullYear() -
                        (date[0] + date[1] + date[2] + date[3])
                      }}
                    </small>
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-between">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Отмена
                </button>
                <button type="button" class="btn btn-success">
                  Создать пользователя
                </button>
              </div>
            </div>
          </div>
        </div>
        <TableHead />
        <tbody>
          <tr scope="row" v-for="(item, i) in people" :key="i">
            <th>{{ ++i }}</th>
            <th>{{ item.surname }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.middle_name }}</th>
            <th>{{ item.birth }}</th>
            <th>{{ item.age }}</th>
            <th>
              <router-link to="/edit/" class="btn btn-primary">
                <i class="material-icons">edit</i>
              </router-link>
            </th>
            <th>
              <button
                class="btn btn-danger"
                data-toggle="modal"
                v-bind:data-target="'#modalDelete-' + item.id"
              >
                <i class="material-icons">delete</i>
              </button>
              <div
                class="modal fade text-dark"
                v-bind:id="'modalDelete-' + item.id"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Удаление пользователя
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Вы действительно хотите
                      <span class="text-uppercase text-danger">удалить</span>
                      пользователя "{{ item.surname }} {{ item.name }}
                      {{ item.middle_name }}" ?
                    </div>
                    <div class="modal-body">
                      <div class="text-uppercase text-danger">
                        это действие нельзя будет отменить
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Закрыть
                      </button>
                      <button type="button" class="btn btn-danger">
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
import CaptionTable from "./subcomponents/CaptionTable";
import TableHead from "./subcomponents/TableHead";
import axios from "axios";

export default {
  components: {
    NotFoundTable,
    CaptionTable,
    TableHead,
  },
  data() {
    return {
      people: [],
      date: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/user")
      .then((res) => (this.people = res.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
