import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/Search/SearchScreen";

/** Simular el llamado del hook useNavigate() de la librería react-router-dom
 * IMPORTANTE: debe iniciar con la palabra mock y no otro nombre
*/
const mockNavigate = jest.fn();

/**Sirve para evaluar cualquier hook de cualquier librería */
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}));
/*****************************************/

describe('Pruebas en <SearchScreen />', () => {

    test('Debe de mostrarse coreectamente con valores por defecto', () => {
        /**Es importante definir la ruta con initialEntries porque es lo que espera el MemoryRouter */
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find(".alert-info").text().trim() ).toBe("Search a vtuber!");

        
    });
    
    test('Debe de mostrar una vtuber y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=suisei"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find("input").prop("value") ).toBe("suisei");
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar un mensaje de error si no encuentra una vtuber', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=suisei123"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find(".alert-danger").text().trim() ).toBe("No results: suisei123");
    });

    test('Debe de llamarse el navigate del hooks useNavigate() en el submit del form', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find("input").simulate("change", {
            target: {
                name: "searchText",
                value: "suisei"
            }
        });

        wrapper.find("form").prop("onSubmit")({
            preventDefault: () => {}
        });

        expect(mockNavigate).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("?q=suisei");
    });
});