import styled from "styled-components";


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const Content = styled.div`
  background-color: #e66767;
  display: flex;
  padding: 32px;
  width: 1024px;
  height: 344px;
  border-radius: 8px;
  position: relative;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 100%;
    height: 70%;
    padding: 1rem;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 220px;
  }
`

export const Details = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
`

export const AddButton = styled.button`
  background-color: #fff;
  color: #e66767;
  padding: 4px 8px;
  width: 218px;
  height: 24px;
  font-size: 13px;
  line-height: 100%;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
