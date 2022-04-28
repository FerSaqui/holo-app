import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/autContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas en <DashboardRoutes />', () => {

    test('Debe de mostrarse correctamente - HoloJP (Ruta por defecto)', () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Fernando"
            }
        }

        const wrapper = mount(
            /**
             * El MemoryRouter es un contexto el cual tiene rutas, es decir, nos servirá para probar componentes que hagan uso de Routes.
             * Nos permite hacer evaluaciones y pruebas como si estuvieramos en el navegador web.
             */
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ["/"] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("h1").text().trim()).toBe("HoloScreen JP");
        expect(wrapper.find("#txtNombre").text().trim()).toBe("Fernando");
    });

    test('Debe de mostrarse correctamente - HoloEN', () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Fernando"
            }
        }

        const wrapper = mount(
            /**
             * El MemoryRouter es un contexto el cual tiene rutas, es decir, nos servirá para probar componentes que hagan uso de Routes.
             * Nos permite hacer evaluaciones y pruebas como si estuvieramos en el navegador web.
             */
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ["/holoEN"] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("h1").text().trim()).toBe("HoloScreen EN");
        expect(wrapper.find("#txtNombre").text().trim()).toBe("Fernando");
    });

});