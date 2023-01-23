import styled from 'styled-components'

export const Container = styled.div`
    height: 80px;
    padding: 0 20px;
    background: #7159c1;
    color: #fff;
    
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    
    h1 span {
        font-weight: 500;
        font-size: 20px;
    }
    a {
        text-decoration: none;
        color: #fff;
        transition: 0.2s;

        :hover {
            color: #efff00;
            transition: 0.3s;
        }
    }
    `