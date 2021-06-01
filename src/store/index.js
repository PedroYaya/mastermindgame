import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {"disabled": true, "colors": ['red', 'blue', 'green', 'yellow'], "guesses": [], "num_colors": 4, "max_guesses": 8, "num_slots": 4},
        unitGuess: '',
        rowGuess: [],
        gridGuess: [],
        pegs: []
    },
    mutations: {
        setCurrentGame(state, payload) {
            state.currentGame = payload
        },
        setUnitGuess(state, payload) {
            state.unitGuess = payload
            console.log(state.unitGuess)
        },
        setRowGuess(state, payload) {
            state.rowGuess = payload
        },
        restartRowGuess(state) {
            state.rowGuess = []
            for (let i = 0; i < state.currentGame.num_slots; i++) {
                state.rowGuess.push('')
            }
        },
        initializeGrid (state) {
            state.gridGuess = []
            for (let i = 0; i < state.currentGame.max_guesses; i++) {
                let arr = []
                state.gridGuess.push(arr)
                for (let j = 0; j < state.currentGame.num_slots; j++) {
                    state.gridGuess[i].push('')
                }
            }
        },
        setGrid(state, { row, arr}) {
            state.gridGuess[row] = arr
        },
        setInitialPegs(state) {
            for (let i = 0; i < state.currentGame.max_guesses; i++) {
                let score = []
                for (let j = 0; j < state.currentGame.num_slots; j++) {
                    score.push('')
                }
                state.pegs.push(score)
            }
        },
        setRowPegs(state, { row, arr}) {
            state.pegs[row] = arr
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getGrid: state => state.gridGuess,
        getUnitGuess: state => state.unitGuess,
        getRowGuess: state => state.rowGuess,
        getPegs: state => state.pegs,
    }
})