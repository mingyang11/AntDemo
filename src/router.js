import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Home from './pages/Home';
import Order from './pages/Order';
import Notfound from './pages/NotFound';
import CarMap from './pages/CarMap';
import CityControl from './pages/CityControl';
import Emploee from './pages/Emploee';
import Jurisdiction from './pages/Jurisdiction';
import RichText from './pages/RichText';
import Buttons from './pages/UI/Button';
import Modal from './pages/UI/Modals';
import Mymodal from './pages/UI/Mymodal/index';
import Loading from './pages/UI/Loading';
import Notification from './pages/UI/Notification';
import Message from './pages/UI/Message';
import Tab from './pages/UI/Tab';
import Carousel from './pages/UI/Carousel';
import Login from './pages/Form/Login';
import Register from './pages/Form/Register';
import BasicTable from './pages/Table/BasicTable';
import Bar from './pages/Echarts/Bar';
import Line from './pages/Echarts/Line';
import Pie from './pages/Echarts/Pie';
import Gtwo from './pages/G2/index';
class Router extends Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modal} />
                                    <Route path="/ui/mymodal" component={Mymodal} />
                                    <Route path="/ui/loadings" component={Loading}/>
                                    <Route path="/ui/notification" component={Notification}/>
                                    <Route path="/ui/tabs" component={Tab}/>
                                    <Route path="/ui/messages" component={Message}/>
                                    <Route path="/order" component={Order} />
                                    <Route path="/bikeMap" component={CarMap} />
                                    <Route path="/city" component={CityControl} />
                                    <Route path="/user" component={Emploee} />
                                    <Route path="/permission" component={Jurisdiction} />
                                    <Route path="/rich" component={RichText} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/g2" component={Gtwo} />>
                                    <Route path="/form/login" component={Login} />
                                    <Route path="/form/reg" component={Register} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route pate="/404" component={Notfound} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>
                        }>
                        </Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default Router;
