import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
 flex-direction: column;
 position: relative;
 cursor: pointer;
 padding: 10px;
 box-sizing: border-box;
`
export const Info = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
`

export const Name = styled.div`
    width: 100%;
    font-weight: bold;
    flex: auto; 
    height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
   
`

export const Rating = styled.div`
    width: 100%;  
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
`

export const StarsContainer = styled.div`
 display: flex;
    flex-shrink: 0;
    min-width: fit-content;
    align-items: center;
    margin-right: 6px;
    & > img:not(:last-child) {
        margin-right: 1px;
    }  
`
export const VotesCount = styled.div`
    width: 100%;  
    color: gray;
    font-size: 12px;
`


export const StarImage = styled.img`
    width: 16px;
    height: 16px;
`

export const PriceContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.div`
    width: 16px;
    height: 16px;
    font-size: 18px;
    width: 100%;
    height: 20px;
    font-weight: bold;
`
export const NightsCount = styled.div`

    flex-shrink: 0;
    height: 20px;
`

