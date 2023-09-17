import MyClass from "@/components/Main/organisms/MyClass";
import RecommendClass from "@/components/Main/organisms/RecommendClass";
import MainLayout from "./layout";
function main (){
    return(
        <MainLayout>
        <MyClass/>
        <RecommendClass/>
        </MainLayout>
    );
}

export default main;