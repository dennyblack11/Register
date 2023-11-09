import styled from "styled-components";


const PageI = () => {
    return <Main>
            <CircleCont>
                <Circle bg="#445188"></Circle>
                <Circle bg="#44508844"></Circle>
                <Circle bg=""></Circle>
                <Circle bg=""></Circle>
            </CircleCont>
  
            <Text>
                <p>Welcome To</p>
                <span> Create an account and access thousand of cool stuffs</span>
            </Text>
  
            <ButtonHold>
                <Button
                 onClick={() => {
                    localStorage.setItem("page", JSON.stringify(2))
                    window.location.reload()
                }}> Get Started </Button>
            </ButtonHold>
  
        </Main>;
    }

    const PageII = () => {

        const d = JSON.parse(localStorage.getItem("page")!)
        console.log(d)
        
        return <Main>
            <CircleCont>
                <Circle bg="#445188"></Circle>
                <Circle bg="#445188"></Circle>
                <Circle bg="#44508844"></Circle>
                <Circle bg=""></Circle>
            </CircleCont>
  
            <Text>
                <span>Please fill the details and create account...</span>
            </Text>
            
            <Input placeholder="input your name" />
            <Input placeholder="input your email" />
  
            <Button1Hold>
                <Button1 bg="#44508844"
                onClick={() => {
                    localStorage.setItem("page", JSON.stringify(1))
                    window.location.reload()
                  }}>Prev</Button1>
                <Button1 bg="#445188"
                 onClick={() => {
                     localStorage.setItem("page", JSON.stringify(3))
                     window.location.reload()
                    }}>Next</Button1>
            </Button1Hold>
  
        </Main>;
    }
    
    const PageIII = () => {
        
        const d = JSON.parse(localStorage.getItem("page")!)
        console.log(d)
        
        return <Main>
            <CircleCont>
                <Circle bg="#445188"></Circle>
                <Circle bg="#445188"></Circle>
                <Circle bg="#445188"></Circle>
                <Circle bg="#44508844"></Circle>
            </CircleCont>
  
            <Text>
                <span>Please fill the details and create account...</span>
            </Text>
            
            <Input placeholder="input your phoneNo" />
            <Input placeholder="input your password" />
  
            <Button1Hold>
                <Button1 bg="#44508844"
                onClick={() => {
                    localStorage.setItem("page", JSON.stringify(2))
                    window.location.reload()
                  }}>Prev</Button1>
                <Button1 bg="#445188"
                onClick={() => {
                    localStorage.setItem("page", JSON.stringify(4))
                    window.location.reload()
                }}>Next</Button1>
            </Button1Hold>
  
        </Main>;
    }

    const PageIV = () => {
        return <Main>
            <CircleCont>
                <Circle bg="#445188"></Circle>
                <Circle bg="#445188"></Circle>
                <Circle bg="#445188"></Circle>
                <Circle bg="#445188"></Circle>
            </CircleCont>
  
            <Text>
                <p> Congratulation!!!!</p>
                <span> Your account has been successfully created...</span>
            </Text>
  
            <Button1Hold>
                <Button1 bg="#445188"
                onClick={() => {
                    localStorage.setItem("page", JSON.stringify(3))
                    window.location.reload()
                  }}> Prev </Button1>
            </Button1Hold>
        </Main>;
    }
    
    const Register = () => {

        const d = JSON.parse(localStorage.getItem("page")!)
        console.log(d)

    return (
    <div>
        <Container>
        {
          d === 1 ? (<PageI/>) : d === 2 ? (<PageII/>) : d === 3 ? (<PageIII/>) : d === 4 ? (<PageIV/>) :null
        }
            {/* {PageI()} */}
            {/* {PageII()} */}
            {/* {PageIII()} */}
            {/* {PageIV()} */}
        </Container>
    </div>
  )

}

export default Register;

// const Main = styled.div``

// const Main = styled.div``

const Input = styled.input`
width: 100%;
height: 40px;
border: 1px solid #7481bd;
background-color: #fff;
margin: 10px 0;
outline: none;

&::placeholder{
  padding-left: 10px;
}
`

const Button1 = styled.div<{bg: string}>`
width: 70px;
height: 45px;
color: white;
background-color: ${({bg}) => bg};
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
cursor: pointer;
`

const Circle = styled.div<{bg: string}>`
width: 7px;
height: 7px;
border-radius: 50%;
border: 1px solid #445188;
margin: 0 5px;
background-color: ${({bg}) => bg};
`

const CircleCont = styled.div`
display: flex;
`

const Button = styled.div`
width: 70%;
height: 45px    ;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 18px;
background-color: #445188;
color: #fff;
font-size: 19px;
cursor: pointer;
&:hover{
    background-color: #606da3;
}
`

const Button1Hold = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

const ButtonHold = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Text = styled.div`
margin: 40px 0;
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
width: 60%;
p{
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #445188;
}
span{
    font-size: 19px;
    font-weight: 500;
    line-height: 23px;
    color: #282e49  ;

}
`
    
const Main = styled.div`
width: 600px;
min-height: 350px;
border: 2px solid #6f00ffd4;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 40px;
flex-direction: column;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

`