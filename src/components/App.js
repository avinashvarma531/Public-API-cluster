import React from 'react';
import axios from 'axios';

import Header from './Header/Header';
import APIPanel from './APIPanel/APIPanel';
import Categories from './Categories/Categories';
import Loader from './Loader';


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            isLoading: true,
            apis: [],
            category: null
        }

        this.setCategory = this.setCategory.bind(this);
    }

    componentDidMount() {
        const BASE_URL = "https://api.publicapis.org/entries";
        const req = async () => {
            return await axios.get(BASE_URL);
        }

        req().then(res => {
            this.setState({
                apis: res.data.entries,
                isLoading: false
            })
        })
        .catch(err => err)
    }

    setCategory(category) {
        console.log(category);
        this.setState({ category });
    }

    getCategoryList() {
        const set = new Set(this.state.apis.map(item => item.Category))
        const categories = []
        set.forEach(value => categories.push(value))

        return categories;
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.isLoading ?
                    <Loader /> :
                        <main id="main">
                            <Categories categories={this.getCategoryList()} setCategory={this.setCategory}/>
                            <APIPanel apis={this.state.apis} category={this.state.category}/>
                        </main>
                }
            </div>
        );
    }
}



// function App() {
//     const [apis, setApis] = useState([]);
//     const [category, setCategory] = useState(null);

//     const BASE_URL = "https://api.publicapis.org/entries";

//     useEffect(() => console.log("rendered!!"), []);

//     useEffect(() => {
//         const req = async () => {
//             return await axios.get(BASE_URL);
//         }

//         req().then(res => {
//             setApis(res.data.entries);
//         })
//         .catch(err => err)
            
//     })

//     const getCategoryList = () => {
//         const set = new Set(apis.map(item => item.Category))
//         const categories = []
//         set.forEach(value => categories.push(value))

//         return categories;
//     }

//     console.log("Avinash");
//     console.log(category);
//     return (
//         <div>
//             <Header />
//             <main>
//                 <Categories categories={getCategoryList()} setCategory={setCategory}/>
//                 <APIPanel apis={apis} category={category}/>
//             </main>
//         </div>
//     );
// }

export default App;