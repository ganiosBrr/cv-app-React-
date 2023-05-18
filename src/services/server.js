import { Model, createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,
        models: {
            education: Model,
        },
        seeds(server) {
            server.create("education", {
                date: 2001,
                title: "Title 0",
                text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
            })
            server.create("education", {
                date: 2000,
                title: "Title 1",
                text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
            })
            server.create("education", {
                date: 2001,
                title: "Title 0",
                text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
            })
        },
        routes() {
            this.namespace = "api";
            this.get("/educations", (schema) => {
                return schema.educations.all();
            },{ timing: 4000 })
        }
    })

    return server;
}
