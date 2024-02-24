import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

import NavBar from "../../component/NavBar/NavBar";
import Button from "../../component/Button/Button";
import ContentBox from "../../component/ContentBox/ContentBox";
import TitleBox from "../../component/TitleBox/TitleBox";
import TextBox from "../../component/TextBox/TextBox";
import FigureContent from "../../component/FigureContent/FigureContent";
import AboutImg from '../../assets/lucas_g.jpeg';

import './root.css';

const Root = () => {
    const location = useLocation();
    const path = location.pathname;

    const [isOpen, setIsOpen] = useState(false);

    function  handleClick(event) {
        if  (event.currentTarget === event.target) {
            setIsOpen(!isOpen);
        };
    };

    function handleReset() {
        setIsOpen(false);
    }

    const [isLogged, setIsLogged] = useState(false);


    function handleLogIn() {
        setIsLogged(true);
    };

    const pathVerify = () => {
        if (path == '/signin') {
            return (<NavLink className='nav-btn' to='/'>Início</NavLink> )
        }
    }

    const sobre = isOpen ? "x" : "Sobre";

    return (
        <>
            <NavBar id='nav-bar'>
                { pathVerify() }
                {isLogged 
                ? <NavLink className='nav-btn' onClick={ handleLogIn } to='/'>LogOut</NavLink> 
                : <NavLink className='nav-btn' onClick={ handleReset } to='/signin'>Acessar</NavLink>}
                <Button className='nav-btn' onClick={ handleClick }>{sobre}</Button>
            </NavBar>

            {isOpen && createPortal(
            <ContentBox id='about-box-background' onClick= {handleClick}>
                <ContentBox id='about-box'>
                    <TitleBox id='about-title'>
                        Sobre o Projeto
                    </TitleBox>
                    <section>
                        <section id='about-text-section'>
                            <TextBox className='about-text'>
                                O projeto "GamerHub" é um exercício didático, focado no desenvolvimento e aprendizado de técnicas projetuais baseadas na utilização da lib React. A temática do projeto é o desenvolvimento de uma plataforma dedicada à avaliação e discussão de games, desenvolvido por Lucas da Silva Gonçalves, um desenvolvedor front-end júnior que está atualmente cursando o programa "Vem ser Tech" em parceria entre a iFood e a escola Ada.tech. O projeto foi desenvolvido como parte do módulo React I do curso.
                            </TextBox>
                            <TextBox className='about-text'>
                                O objetivo do projeto "GamerHub" é fornecer uma plataforma para entusiastas de jogos para compartilhar suas opiniões e avaliações sobre diferentes títulos de jogos. A plataforma permite que os usuários criem contas, pesquisem e filtrem jogos por diferentes categorias, e publiquem suas próprias avaliações e pontuações.
                            </TextBox>
                            <TextBox className='about-text'>
                            O projeto "GamerHub" foi desenvolvido utilizando as seguintes tecnologias:
                            </TextBox>
                            <ul>
                                <li>
                                    HTML: linguagem de marcação de textos, universalmente utilizada no contexto web.
                                </li>
                                <li>
                                    CSS: linguagem de estilização, voltada a padronização estética dos componentes do projeto.
                                </li>
                                <li>
                                    JavaScript: linguagem de programação de alto nível, com adoção abrangente em diversas áreas e especial enfoque no contexto web.
                                </li>
                                <li>
                                    React: Uma lib JavaScript para construção de interfaces de usuário.
                                </li>
                                <li>
                                    React-Router: Uma lib direcionada ao roteamento das diferentes páginas componentes do projeto react.
                                </li>
                            </ul>
                            <TextBox className='about-text'>
                            Como resultado do projeto "GamerHub", foi possível o desenvolvimento de técnicas e habilidades voltadas a criação, gerencimanto e organização de componentes React.
                            </TextBox>
                            <TextBox className='about-text'>
                                Futuros desafios podem ser consumo mais aprofundado de APIs, bem como melhoria geral no código e integração adequada com sistema de banco de dados e CMS.
                            </TextBox>
                        </section>
                        <FigureContent id='about-figure' src={ AboutImg } alt='Foto de Lucas Gonçalves, autor do projeto.' caption='Lucas Gonçalves, autor do projeto.'/>
                    </section>
                </ContentBox>
            </ContentBox>, 
            document.body)}
        <Outlet />
        </>
    );
};

export default Root;