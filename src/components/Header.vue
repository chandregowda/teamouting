<template>
  <b-navbar toggleable="md" type="dark" variant="primary" fixed :sticky="stickyValue">
    <b-navbar-brand href="#">
        <span class="logo"><font-awesome-icon icon="users"/></span> {{title}}
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
            <template v-if="isAuthenticated">
                <b-navbar-brand to="#" active-class="active" exact >
                    <b-row>
                        <b-col>
                            <font-awesome-icon  size="sm" icon="user" /> {{user.displayName}}
                            <span class='m-2 active pst-time'>PST : {{losAngelesTime}}</span>
                        </b-col>
                    </b-row>
                </b-navbar-brand>
                <button v-b-popover.hover="'Logout'" class='logout' @click='logout' >
                    <font-awesome-icon  size="lg" icon="sign-out-alt" />
                </button>
            </template>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            stickyValue: true,
            title: 'Team Outing'
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.AUTH_TOKEN_GETTER !== null;
        },
        user() {
            // console.log(this.$store.getters.AUTH_USER_DETAILS_GETTER);
            let details = this.$store.getters.AUTH_USER_DETAILS_GETTER;
            return { displayName: '', ...details };
        },
        losAngelesTime() {
            return this.$store.getters.GET_LOSANGELES_TIME;
        }
    },
    methods: {
        logout() {
            return this.$store.dispatch('AUTH_LOGOUT_ACTION');
        }
    },
    components: {
        FontAwesomeIcon
    }
};
</script>
<style scoped>
.logout {
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}
.logout:hover {
    color: rgba(255, 255, 255, 0.75);
}
.logo {
    color: yellow;
    font-size: 1.2em;
}
.pst-time {
    color: white;
    font-size: 12px;
}
</style>
