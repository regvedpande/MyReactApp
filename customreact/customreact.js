/*
    The customRender function creates a new DOM element based on the type of
    reactElement, which is an anchor tag in this case. It sets the text content
    of this element to reactElement.children. The function sets the href and
    target attributes from reactElement.props, and then appends the configured
    DOM element to the specified container. The script defines a reactElement
    object representing a link and selects a container from the HTML document.
    Finally, it calls customRender to render the link inside this container.

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}*/

function customRender(reactElement, container){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
   if(prop == 'children') continue;
   domElement.setAttribute(prop, reactElement.props[prop])
}
container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
