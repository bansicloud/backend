"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
    name: "answers",
    mixins: [DbService],
    adapter: new MongoDBAdapter(process.env.MONGO_URI),
    collection: "answers",

    /**
     * Service settings
     */
    settings: {},

    /**
     * Service dependencies
     */
    dependencies: [],

    /**
     * Actions
     */
    actions: {

        saveAnswers: {
            async handler(ctx) {
                const {completedSurvey_id, survey_id, answers} = ctx.params
                for (let answer of answers) {
                    await this.adapter.insert({survey_id, completedSurvey_id, ...answer})
                }

            }
        }

    },

    /**
     * Events
     */
    events: {},

    /**
     * Methods
     */
    methods: {},

    /**
     * Service created lifecycle event handler
     */
    created() {

    },

    /**
     * Service started lifecycle event handler
     */
    started() {

    },

    /**
     * Service stopped lifecycle event handler
     */
    stopped() {

    }
};