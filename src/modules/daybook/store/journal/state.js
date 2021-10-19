
export default ()=> ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: '1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid sed autem asperiores iste nulla, sequi provident possimus quo? Voluptas possimus quam ea et nisi minus maxime obcaecati laborum cum.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: '2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid sed autem asperiores iste nulla, sequi provident possimus quo? Voluptas possimus quam ea et nisi minus maxime obcaecati laborum cum.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: '3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid sed autem asperiores iste nulla, sequi provident possimus quo? Voluptas possimus quam ea et nisi minus maxime obcaecati laborum cum.',
            picture: null
        }
    ]
})