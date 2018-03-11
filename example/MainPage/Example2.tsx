import {h, render, srouter, IPage} from "spiel-client";
import { Example2Controller } from "./Example2Controller"

export class Example2 implements IPage {
    state = {
        title: 'Hello'
    }

    view(state: any) {
        const element = document.createElement('div');
        const controller = new Example2Controller(state);

        function addElement() {
            element.innerText = 'div is added';
            document.body.appendChild(element);
        }
        
        return (
            <div>
                {(state.title === 'Hello Spiel') ? 
                <span 
                    oncreate={() => console.log('the change title is created')}
                    onupdate={() => console.log('the change title is updated')}
                    ondestroy={() => console.log('the change title is destroyed')}
                >Title change</span>: null}
                <h1 
                    key="title"
                    oncreate={() => console.log('the title is created')}
                    onupdate={() => console.log('the title is updated')}
                    ondestroy={() => console.log('the title is destroyed')}
                >{state.title} {state.params.number}</h1>
                <button
                    onclick ={() => { controller.changeTitle()}}
                >Change Title</button>

                <button
                    onclick = {() => {
                        srouter.go('/home');
                    }}
                >go to root</button>
                <button onclick={() => addElement()}>add element</button>
            </div>
        )
    }

    removeElement() {
        
    }
}

export const example2 = new Example2();