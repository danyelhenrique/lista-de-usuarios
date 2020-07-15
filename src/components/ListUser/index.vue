<template>
  <v-simple-table>
    <template v-slot:default>
      <thead class="list-user-table-head">
        <tr>
          <th class="text-left"></th>
          <th class="text-left">Usuario</th>
          <th class="text-left">Email</th>
          <th class="text-center">Data de Inclusão</th>
          <th class="text-center">Data de Alteração</th>
          <th class="text-center">Regras</th>
          <th class="text-left">Status</th>
          <th class="text-left"></th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name" class="list-user">
          <td>
            <label :for="user.name">
              <input type="radio" :name="user.name" :id="user.name" />
              <span></span>
            </label>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td class="text-center">{{ user.created_at }}</td>
          <td class="text-center">{{ user.updated_at }}</td>
          <td class="text-center">{{ user.rules }}</td>
          <td class="text-left" v-if="user.status" style="color: green">
            ATIVO
          </td>
          <td class="text-left" v-else style="color: red">DESATIVADO</td>
          <td class="text-center table-hover">
            <div class="icons">
              <v-btn class="pa-0 button no-bg no-shadow no-min-widht no-border">
                <i class="material-icons list-user-icon">delete</i>
              </v-btn>

              <v-btn class="pa-0 button no-bg no-shadow no-min-widht no-border">
                <i class="material-icons list-user-icon">archive</i>
              </v-btn>

              <v-btn class="pa-0 button no-bg no-shadow no-min-widht no-border">
                <i class="material-icons list-user-icon">security</i>
              </v-btn>

              <v-btn class="pa-0 button no-bg no-shadow no-min-widht no-border">
                <i class="material-icons list-user-icon">create</i>
              </v-btn>
            </div>
          </td>
          <td class="text-center">
            <i class="material-icons more">more_horiz</i>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "ListUsers",
  data: function() {
    return {
      users: [
        {
          name: "Eclair",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: true,
          actions: "...",
        },
        {
          name: "Cupcake",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: true,
          actions: "...",
        },
        {
          name: "Gingerbread",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: true,
          actions: "...",
        },
        {
          name: "Eclair",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: true,
          actions: "...",
        },
        {
          name: "Cupcakee",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: true,
          actions: "...",
        },

        {
          name: "Jelly beana",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: false,
          actions: "...",
        },
        {
          name: "Lollipopp",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: false,
          actions: "...",
        },
        {
          name: "Honeycombn",
          email: "test@gmail.com",
          created_at: "30/05/2020",
          rules: "01",
          updated_at: "30/05/2020",
          status: true,
          actions: "...",
        },
      ],
    };
  },
};
</script>

<style>
thead {
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1) !important;
  background: #fff;
}
</style>
<style lang="scss" scoped>
.v-data-table {
  background-color: #f5f5f5;
  color: #000;
  text-transform: uppercase;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1) !important;

  .more {
    color: #757575;
    font-size: 20px;
    font-weight: 600;
    line-height: unset;
  }
  .table-hover .icons {
    opacity: 0;

    button {
      margin: 0 2px;

      i {
        color: #757575;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  table {
    th,
    thead {
      color: #000 !important;
    }

    tbody {
      tr:nth-child(2n + 2) {
        background: #e9e9e9 !important;
      }
      tr {
        background: #f5f5f5 !important;
        cursor: pointer;

        &:hover td {
          border-bottom: 2px solid #d81b60 !important;
          background: rgba(255, 255, 255, 1);
        }
      }

      tr {
        &:hover .table-hover .icons {
          opacity: 1;
        }
        td {
          border-bottom: 2px solid transparent !important;

          input[type="radio"] {
            display: none;
          }

          span {
            height: 20px;
            width: 20px;
            display: block;
            background-color: #fff;
            border: 1px solid #dedede;
            transition: border-radius 1s ease;
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
          }

          input[type="radio"]:checked + span {
            content: " ";
            display: inline-block;
            background: #f1541a;
            top: 0;
            right: 0;
            left: 0;
            border: 1px solid #f1541a;
            border-radius: 100%;
            box-shadow: none;
          }

          label {
            position: relative;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            ::before {
              content: " ";
              display: inline-block;
              background: #9e9e9e;
              background-color: transparent;
              top: 0;
              right: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
