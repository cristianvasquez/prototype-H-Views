import { app, h } from 'hyperapp'
import './index.css'

const state = {
    count: 0,
}

const actions = {
    reset: () => ({ count: 0 }),
    sum: data => ({ count }) => ({ count: count + data }),
}

const view = (state, actions) => (
    <div>
        <h1>{state.count}</h1>
        <div>
            <button onclick={e => actions.sum(-1)}>Sub</button>
            <button onclick={e => actions.reset()}>Reset</button>
            <button onclick={e => actions.sum(1)}>Add</button>
        </div>
    </div>
)

const main = document.querySelector('#main');

app(state, actions, view, main)
