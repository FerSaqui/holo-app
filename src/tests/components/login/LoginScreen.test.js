import { mount} from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/autContext";
import { LoginScreen } from "../../../components/Login/LoginScreen";
import { types } from "../../../types/types";

const dispatch = jest.fn();

/**Simular el hook o la librería de react-router-dom */
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <LoginComponent />', () => {
    const contextValue = {
        user: {
            logged: false
        },
        dispatch
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={["/login"]}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegación', () => {
        const handleClick = wrapper.find("button").prop("onClick");
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {name: "Fernando"}
        });

        expect( mockNavigate ).toHaveBeenCalledWith("/", {"replace": true});
        localStorage.setItem("lastPage", "/holoJP");
        
        handleClick();

        expect( mockNavigate ).toHaveBeenCalledWith("/holoJP", {"replace": true});
    });

});