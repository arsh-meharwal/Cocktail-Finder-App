import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center; 
  } 
`;

export default Wrapper;
