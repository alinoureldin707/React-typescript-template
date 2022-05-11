// Configure your layout and place the children in its place
const Layout: React.FC<{ children: any }> = ({children})=>{
    return (
        <div>
            My layout
            {children}
        </div>
    )
}


export default Layout