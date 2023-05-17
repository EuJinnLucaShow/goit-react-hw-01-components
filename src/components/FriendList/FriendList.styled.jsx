import styled from '@emotion/styled'

export const FriendList = styled.li`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`
export const FriendAvatar = styled.img`
width: 75px
`
export const FriendName = styled.p`
  font-size: 18px;
  line-height: 1.62;
  font-weight: 18px;
  margin-left: 20px;
`
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
background-color: ${props => (props.statusType ? 'green' : 'red')};
`
export const FriendItems = styled.ul`
  display: flex;
  width: 350px;
  flex-direction: column;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: lightgoldenrodyellow;
  border-radius: 10px;
`