import React, { useState } from 'react';
import { GraphQLEditor } from 'graphql-editor';


const types = {
    name: `
        type Query{
            names: [Smita]
        }
    `,
    nameLibrary: `
        type Smita{
            name: String;
        }
    `,
};

export const App = () => {
const [schema, setSchema] = useState({
  code: types.name,
  libraries: types.nameLibrary
});

const resetEditor = ()=>{
    console.log(schema)
    // setSchema(undefined)
    console.log("code", schema.code)

    setSchema({code: '', libraries:''});
   
    // console.log(schema)
}

return (
    <>
        <div className='main'    >
            <div>
                <button onClick={resetEditor}>Create New Graph</button>
                <button>Load Existing</button>
            </div>
        <GraphQLEditor
            onSchemaChange={(props) => {
            setSchema(props);
            }}
            schema={schema}
        />
        </div>
    </>
  );
};
