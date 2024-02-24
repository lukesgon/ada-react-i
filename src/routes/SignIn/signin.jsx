import { createPortal }  from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import ContentBox from '../../component/ContentBox/ContentBox';
import TitleBox from '../../component/TitleBox/TitleBox';
import Button from '../../component/Button/Button';
import Form from '../../component/Form/Form';
import Input from '../../component/Input/Input';
import FieldSet from '../../component/FieldSet/FieldSet';

import './signin.css';

const  SignIn = (props) => {
    const [section, setSection] = useState(false);

    function signSectionSet() {
        setSection(!section);
    };

    const signSection = () => {
        if (section) {
            return (
                <>
                    <TitleBox id='signup-title'>Cadastre-se</TitleBox>
                    <Form 
                    action='' 
                    >
                        <FieldSet
                        className='signup-fieldset'
                        legend='Dados Pessoais'>
                            <Input 
                            label='Nome completo:'
                            name='nome-completo'
                            type='text'
                            placeholder='Ex: Lucas da Silva Gonçalves'
                            autocomplete='off'
                            />

                            <Input
                            label='Nascimento:'
                            name='nascimento'
                            type='date'
                            autoComplete='off'
                            
                            />
                        </FieldSet>

                        <FieldSet
                        className='signup-fieldset'
                        legend='Dados de Contato'>
                            <Input
                            label='E-mail:'
                            name='email'
                            type='email'
                            placeholder='Ex: email@email.com'
                            autocomplete='off'
                            />

                            <Input
                            label='Telefone:'
                            name='tel'
                            type='tel'
                            placeholder='(xx) xxxxx-xxxx'
                            autocomplete='off'
                            />
                        </FieldSet>

                        <FieldSet
                        className='signup-fieldset'
                        legend='Dados de Acesso'>
                            <Input
                            label='Apelido:'
                            name='nickname'
                            type='text'
                            placeholder='Ex: User123'
                            autocomplete='off'
                            />

                            <Input
                            label='Senha:'
                            name='password'
                            type='password'
                            placeholder='Ex: t8a2x3a0'
                            autocomplete='off'
                            />
                        </FieldSet>

                        <Button
                        type='submit'
                        id='signup-submit'
                        className='nav-btn'
                        autocomplete='off'>Enviar</Button>
                    </Form>
                </>
            )
        } else {
            return (
                <>
                    <TitleBox id='signin-title'>Acesse a Plataforma</TitleBox>
                    
                    <Form id='signin-form'>
                        <Input
                        label='Apelido:'
                        name='nickname-signin'
                        type='text'
                        placeholder='Apelido cadastrado'
                        />

                        <Input
                        label='Senha:'
                        name='password-signin'
                        type='password'
                        placeholder='Senha cadastrada'
                        />
                        
                        <Button 
                        type='submit'
                        id='signin-submit'
                        className='nav-btn'>Acessar</Button>
                    </Form>
                    <Link to='/' id='recovery-signin'>Esqueceu sua senha? Clique aqui.</Link>
                </>
            )
        }
    }

    return (
            <ContentBox id='sign-box'>
                <section id='navigate'>
                    {section 
                    ? <Button className='nav-btn' onClick={ signSectionSet }>Acesso</Button>
                    :<Button className='nav-btn' onClick={ signSectionSet }>Cadastro</Button>}

                </section>
                <section id='form-display'>
                    { signSection() }
                </section>
            </ContentBox>
    );
};

export default  SignIn;