import { mount} from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/autContext";
import { LoginScreen } from "../../../components/Login/LoginScreen";
import { VtuberScreen } from "../../../components/Vtuber/VtuberScreen";
import { types } from "../../../types/types";

const dispatch = jest.fn();

/**Simular el hook o la librería de react-router-dom */
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <VtuberScreen />', () => {

    test('NO debe de mostrar <VtuberScreen /> si no hay una vtuber en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/vtuber"]}>
                <Routes>
                    <Route path="/vtuber" element={<VtuberScreen />} />
                    <Route path="/" element={<h1>No vtuber Page</h1>} />
                </Routes>
            </MemoryRouter>
        );
        expect( wrapper.find("h1").text().trim() ).toBe("No vtuber Page");
    });

    test('DEBE de mostrar una vtuber si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/vtuber/JP-Hoshimachi-Suisei"]}>
                <Routes>
                    <Route path="/vtuber/:vtuberId" element={<VtuberScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find(".text-muted").exists() ).toBe(true);
    });

    test('Debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/vtuber/JP-Hoshimachi-Suisei"]}>
                <Routes>
                    <Route path="/vtuber/:vtuberId" element={<VtuberScreen />} />
                </Routes>
            </MemoryRouter>
        );
        
        wrapper.find("button").prop("onClick")();
        expect( mockNavigate ).toHaveBeenCalledWith(-1);
    });

    test('DEBE de mostrar la página por defecto si no tenemos una vtuber', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/vtuber/JP-Hoshimachi-Suisei123123sa"]}>
                <Routes>
                    <Route path="/vtuber/:vtuberId" element={<VtuberScreen />} />
                    <Route path="/" element={<h1>No vtuber Page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.text().trim() ).toBe("No vtuber Page");
    });

});