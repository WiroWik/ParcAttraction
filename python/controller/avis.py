import request.request as req

def add_avis(data):
    print(data, flush=True)

    if (not "nom" in data or data["nom"] == ""):
        data["nom"] = ""
    
    if (not "prenom" in data or data["prenom"] == ""):
        data["prenom"] = ""
    
    if (not "note" in data or data["note"] is None):
        return False
    
    if (not "commentaire" in data or data["commentaire"] == ""):
        return False

    if ("avis_id" in data and data["avis_id"]):
      requete = f"UPDATE avis SET nom='{data['nom']}', prenom='{data['prenom']}', note={data['note']}, commentaire='{data['commentaire']}' WHERE avis_id = {data['avis_id']}"
      req.insert_in_db(requete)
      id = data['avis_id']
    else:
      requete = "INSERT INTO avis (nom, prenom, note, commentaire) VALUES (?, ?, ?, ?);"
      id = req.insert_in_db(requete, (data["nom"], data["description"], data["difficulte"], data["visible"]))

    return id

def get_all_avis():
    json = req.select_from_db("SELECT * FROM avis")
    
    return json

def get_avis(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM avis WHERE avis_id = ?", (id,))

    if len(json) > 0:
        return json[0]
    else:
        return []

def delete_avis(id):
    if (not id):
        return False

    req.delete_from_db("DELETE FROM avis WHERE avis_id = ?", (id,))

    return True