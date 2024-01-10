from pymongo.mongo_client import MongoClient
import urllib   
uri = "mongodb+srv://Sankiliyandi:"+urllib.parse.quote("devilDB1234!@#")+"@cluster0.imybs2z.mongodb.net/?retryWrites=true&w=majority"
client=MongoClient(uri)
db=client["sample"]
collection=db["samcol"]
use={"nww":"rtw"}
result=collection.insert_one(use)
vv=collection.find_one()
print(vv)
client.close()



# def addUser(user):
#     uri = "mongodb+srv://Sankiliyandi:"+urllib.parse.quote("devilDB1234!@#")+"@cluster0.imybs2z.mongodb.net/?retryWrites=true&w=majority"
#     client=MongoClient(uri)
#     db=client["ToonAnime"]
#     collection=db["user"]
#     collection.insert_one(user)
#     client.close()