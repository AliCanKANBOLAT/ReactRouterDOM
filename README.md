# Working with ReactRouterDOM

## This Project aims that;
Understanding the Main React Router DOM Structure and Learning to Work with Private Routes


### Project installation:
````
npm create vite@latest

nm install react-router-dom

npm i bootstrap@5.3.0-alpha3
````

#### Start to Project:
````
npm run dev
````

......................................................................................
-[x] React-Router-Dom and Bootstrap Setup
-[x] Creating Navbar
-[x] Creating Page Structure
-[x] Accessing Pages via React Router Dom
-[x] Creating Products Section
-[x] Displaying 10 Products on Homepage
-[x] Creating Product Layout Structure -> Categories and Links to the Last 5 Products
-[x] Opening Detail Page when Clicking on Products
-[x] Creating Login Structure (localStorage)
-[x] Ability to Logout if User is Logged in (localStorage)
-[x] Ability for Logged-in User to Add Products to Favorites (localStorage)
-[x] Ability for Logged-in User to Navigate to Favorites Page // (PrivateRoute..)

.......................................................................................


1. useNavigate, React Router'daki bir kancadır ve programatik olarak yönlendirme yapmayı sağlar. Özellikle tıklama işlevi olmadan sayfalar arasında geçiş yapmanız gerektiğinde veya belirli bir koşul gerçekleştiğinde yönlendirme yapmanız gerektiğinde kullanışlıdır.

Bu örnekte (App.jsx), kullanıcı girişi ve çıkışı işlemlerinde useNavigate kullanılmış. Örneğin, kullanıcı giriş yaptığında, kullanıcı ana sayfaya yönlendirilir. Ayrıca, kullanıcı çıkış yaptığında da yönlendirme işlemi gerçekleşir.

İlgili örnekte, useNavigate ile birlikte kullanılan handleLogin fonksiyonu, kullanıcının giriş yapması durumunda ana sayfaya yönlendirme yapar (navigate('/')). Benzer şekilde, handleLogout fonksiyonu kullanıcının çıkış yapması durumunda yönlendirme gerçekleştirmez, ancak kullanıcıyı oturumu kapatır ve sayfayı yeniden yükler.

2. index={true}: (SİDEROUTES) index={true} ifadesi, bir rotanın "ana" bileşenini belirlemek için kullanılır. Yani, bir rotanın alt rotaları varsa ve bu rotanın kendisi de kendi başına bir içerik gösteriyorsa, o zaman bu rotanın "ana" bileşeni olarak işaretlenmesi gerekir.

Bu özellikle, bir rotanın altında farklı alt rotalar varsa ve ana rotanın kendisi de bir içeriğe sahipse, bu ana rotanın belirtilmesi için index={true} kullanılır. Bu, rotaların iç içe olduğu durumlarda rotaların hiyerarşisini belirtmek için önemlidir.
            <Route path="/products" element={<ProductLayOut  />}> 
            <Route index={true} element={<Products  user={user} />} />

Bu yapı aynı rotaya aittir. "/products" yolu altında, ProductLayout bileşeni gösterilecektir. Ancak, ProductLayout bileşeninin altında farklı içeriklerin de gösterilebilmesi için index={true} özelliğiyle <Products /> bileşeni tanımlanmıştır.

Yani, ProductLayout bileşeni "/products" yolunda ana bileşen olarak yer alırken, Products bileşeni de bu ana bileşenin altında yer alan bir alt bileşendir. Bu şekilde, ProductLayout bileşeni, Products bileşenini içerir ve gösterir.

3. OUTLET: ProductLayOut bileşeninin içinde bir Outlet varsa, bu, "/products" yolunun altındaki rotaların (yani alt rotaların) içeriğini gösterecektir. Dolayısıyla, Products bileşeni de bu Outlet aracılığıyla gösterilecektir, çünkü Products bileşeni ProductLayOut bileşeninin alt rotasıdır. BİR ÜST ROTANIN CHİLD LARINI RENDER ETMEK ICIN KULLANILIR. CHİLD ROTALARIN RENDER EDILECEGI YERE OUTLET KOYABİLİRİZ.

4. useParams() : <Route path="category/:categoryName" element={<Category user={user}/>} />
<!-- <Route path="category/:categoryName"  :/ dinamik rota buraya useParams ile ulaşabiliriz. -->
const {categoryName} = useParams(),   
const [categoryProducts, setCategoryProducts] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)  
        <!-- ${categoryName} -->
            .then(res => res.json())
            .then(res => setCategoryProducts(res))
            .catch(res => console.error(res))
        }, [categoryProducts])
USEPARAMS URL parametrelerine erişim sağlar. Dinamik URL yollarında, yol parametrelerini almak için kullanılır.
useParams kancası, React Router'daki dinamik rotalardan gelen URL parametrelerini almak için kullanılır. Dinamik rotalar, URL'deki belirli bölümleri değişken olarak alabilen rotalardır. Bu değişkenler genellikle URL'de belirli bir noktada yer alır ve o noktadaki değerler bileşen tarafından kullanılabilir. Örneğin, bir ürünün ayrıntılarını göstermek için /product/:id gibi bir dinamik yol tanımlayabilirsiniz. Burada :id, herhangi bir ürünün benzersiz kimliğini temsil eder. Kullanıcı bu rotayı ziyaret ettiğinde, URL'deki id parametresi, useParams kancası aracılığıyla alınabilir ve ardından bu parametre kullanılarak belirli bir ürünün ayrıntıları alınabilir. 
örnek:
function ProductDetail() {
  const { id } = useParams();

  // id parametresini kullanarak belirli bir ürünün ayrıntılarını getir
  // Örnek bir fetch işlemi:
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        // Gelen veriyle bir şeyler yap
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
      {/* Ürün ayrıntılarını göster */}
    </div>
  );
}
Bu örnekte, useParams kancası aracılığıyla id parametresi alınır ve daha sonra bu parametre kullanılarak belirli bir ürünün ayrıntılarını getirmek için bir fetch işlemi yapılır. Bu şekilde, dinamik rotadan gelen parametrelerle çalışabilir ve uygun işlemleri gerçekleştirebilirsini
