import React from 'react';
import {useCMS} from 'tinacms';
import { Button } from 'reactstrap';

export default function EditButton(){
    const cms = useCMS();
    return(
        <Button color="primary" onClick={()=>cms.toggle()}>
            {cms.enabled ? 'Sair da Edição' :'Editar Site'}
        </Button>
    );
}