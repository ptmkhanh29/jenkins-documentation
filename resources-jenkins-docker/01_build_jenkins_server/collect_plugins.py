import json, os

root = os.path.abspath(os.path.dirname(__file__))
with open(f"{root}/platform-plugins.json", "r") as file:
    plugins_data = json.load(file)

with open(f"{root}/plugins_sugesst.txt", "w") as file:
    for plugin in plugins_data:
        for name, plugin_list in plugin.items():
            if name == "plugins":
                for plugin_name in plugin_list:
                    for key, value in plugin_name.items():
                        if key == "suggested":
                            print(f"{plugin_name['name']}")
                            file.write(f"{plugin_name['name']}:latest\n")