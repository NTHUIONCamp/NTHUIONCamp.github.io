import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#565AA6",
                accent: "#4B72A6",
                success: "#1297A6",
                warning: "#038C7F",
                info: "#04B3A1",
                error: "#0511F2",
            },
        },
    },
});
