import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/autContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => <span>Saliendo de aquí</span>
}));

describe('Pruebas en <PrivateRoute />', () => {
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar en el localstorage', () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Fernando"
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/holoJP"]}>
                    <PrivateRoute>
                        <h1>Privated Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect( wrapper.text() ).toBe("Privated Component");
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPage", "/holoJP");
    });

    test('DEBE de bloquear el componente si no esta autenticado', () => {
        const contextValue = {
            user: {
                logged: false,
                name: "Fernando"
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/holoJP"]}>
                    <PrivateRoute>
                        <h1>Privated Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect( wrapper.text() ).toBe("Saliendo de aquí");
    });

});