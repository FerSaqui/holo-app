import { mount} from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/autContext";
import { Navbar } from "../../../components/Navbar/Navbar";
import { types } from "../../../types/types";

const dispatch = jest.fn();

/**Simular el hook o la librería de react-router-dom */
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}));

/*****************************************************/

describe('Pruebas en <navbar />', () => {
    const contextValue = {
        user : {
            logged: true,
            name: "Fernando"
        },
        dispatch
    }

    test('Debe de mostrarse correctamente', () => {

        // const wrapper = mount(
        //     <AuthContext.Provider value={ contextValue }>
        //         <MemoryRouter>
        //             <Navbar />
        //         </MemoryRouter>
        //     </AuthContext.Provider>
        // );
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ["/"] }>
                    <Routes>
                        <Route path="/" element= {<Navbar />} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("#txtNombre").text().trim() ).toBe(contextValue.user.name);
    });

    test('Debe de llamar el logout, llamar navigate y el dispatch con los argumentos', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // wrapper.find(".bg-danger").simulate("click");
        wrapper.find(".bg-danger").prop("onClick")(); //Alternativa a simular el click al botón
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
        expect(mockNavigate).toHaveBeenCalledWith("/login", {replace: true});
    });

});