import { mount } from "enzyme";
import { AuthContext } from "../../auth/autContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en <AppRouter />', () => {
    
    test('Debe de mostrar el login si no esta autenticado', () => {
        const contextValue = {
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("h1").text()).toBe("Login Screen");
    });

    test('Debe de mostrar el componente de HoloJP si esta autenticado', () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Fernando"
            }
        };
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find(".navbar").exists() ).toBe( true );
    });
});