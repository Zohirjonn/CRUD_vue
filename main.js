const app = Vue.createApp({
  data() {
    return {
      name: "",
      email: "",
      job: "",
      date:
        new Date().getDate() +
        "." +
        (new Date().getMonth() + 1) +
        "." +
        new Date().getFullYear(),
      users: [
        {
          id: 1,
          name: "Akbar",
          email: "akbar@mail.com",
          job: "Backend developer",
          date: "11.10.2022",
        },
      ],
      errorHandler: "",
      error: false,
      handleUserId: null,
    };
  },
  methods: {
    addUser() {
      if (this.handleUserId != null) {
        let findUsers = this.users.find((user) => user.id == this.handleUserId);
        findUsers.name = this.name;
        findUsers.email = this.email;
        findUsers.job = this.job;
        findUsers.date = this.date;
        (this.handleUserId = null),
          (this.name = ""),
          (this.email = ""),
          (this.job = "");
      } else if (this.name != "" && this.email != "" && this.job != "") {
        this.error = false;
        let newUser = {
          id: this.users.length + 1,
          name: this.name,
          email: this.email,
          job: this.job,
          date: this.date,
        };
        this.users.push(newUser);
        (this.name = ""), (this.email = ""), (this.job = "");
      } else {
        this.error = true;
        this.errorHandler = "Iltimos ma'lumotlarni to'liq kiriting!";
      }
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id != id);
    },
    updateUser(id) {
      let findUsers = this.users.find((user) => user.id == id);
      this.name = findUsers.name;
      this.email = findUsers.email;
      this.job = findUsers.job;
      this.handleUserId = id;
    },
  },
  computed: {
    reverseUsers() {
      return this.users.reverse();
    },
  },
})
app.mount("#main");
