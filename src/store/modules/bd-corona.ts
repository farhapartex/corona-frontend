import { RootState, BDInfoState } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import { BD_INFO_ENDPOINT } from '../endpoints.names';
import { BD_CORONA_INFO } from '../actions.names';

const DEFAULT_AUTH_STATE: BDInfoState = {
    token: null,
    error: false
};

export const state: BDInfoState = JSON.parse(JSON.stringify(DEFAULT_AUTH_STATE));

const getters: GetterTree<BDInfoState, RootState> = {

};

const actions: ActionTree<BDInfoState, RootState> = {
    async [BD_CORONA_INFO]({ commit }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios
                .get(BD_INFO_ENDPOINT)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(e => {
                    reject(e);
                });

        });
    },
}

const mutations: MutationTree<BDInfoState> = {

};

const BDInfoStateModule: Module<BDInfoState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default BDInfoStateModule;