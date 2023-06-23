export const fetchCategories = async () => {

    try {
        const response = await fetch('http://localhost:5678/api/categories');
        
        if(!response) {
            throw new Error('Erreur lors de la requête. Statut : ' + response.status);
        }

        const categories = await response.json();
        return categories;
        
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }

}

export const fetchWorks = async () => {

    try {
        const response = await fetch('http://localhost:5678/api/works');
        
        if(!response) {
            throw new Error('Erreur lors de la requête. Statut : ' + response.status);
        }

        const works = await response.json();
        return works;

    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }

}

// fetch delete
export const deleteWorks = async () => {

    try {
        await fetch(`http://localhost:5678/api/works/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${user}`
            }
        });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression:", error);
    }

}

// fetch post

// fetch login

export const fetchLogin = async (user) => {

    try {
        const response = await fetch('http://localhost:5678/api/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: user
        });
        
        if(!response) {
            throw new Error("Erreur lors de la connexion. Statut : " + response.status);
        }

        const login = await response.json();
        return login;

    } catch (error) {
        console.error(error);
    }

}