"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // для парсинга JSON
app.use((0, cors_1.default)());
// Логирование всех входящих запросов
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});
// const auth_json = {
//   "type": "scaffold",
//   "args": {
//     "appBar": {
//       "type": "app_bar",
//       "args": {
//         "title": {
//           "type": "text",
//           "args": {
//             "text": "Form"
//           }
//         }
//       }
//     },
//     "backgroundColor": "#e0e0e0",
//     "body": {
//       "type": "safe_area",
//       "args": {
//         "bottom": true,
//         "child": {
//           "type": "form",
//           "args": {
//             "child": {
//               "type": "single_child_scroll_view",
//               "args": {
//                 "padding": [
//                   16,
//                   0
//                 ],
//                 "child": {
//                   "type": "container",
//                   "args": {
//                     "alignment": "topCenter",
//                     "width": "infinity",
//                     "child": {
//                       "type": "container",
//                       "args": {
//                         "constraints": {
//                           "maxWidth": 450
//                         },
//                         "child": {
//                           "type": "column",
//                           "args": {
//                             "mainAxisSize": "min",
//                             "children": [
//                               {
//                                 "type": "sized_box",
//                                 "args": {
//                                   "height": 16
//                                 }
//                               },
//                               {
//                                 "type": "sized_box",
//                                 "args": {
//                                   "height": 8
//                                 }
//                               },
//                               {
//                                 "type": "material",
//                                 "args": {
//                                   "borderRadius": 16,
//                                   "color": "#fff",
//                                   "elevation": 4,
//                                   "margin": [
//                                     0,
//                                     8
//                                   ],
//                                   "padding": 16,
//                                   "child": {
//                                     "type": "column",
//                                     "args": {
//                                       "mainAxisSize": "min",
//                                       "children": [
//                                         {
//                                           "type": "text_form_field",
//                                           "id": "login",
//                                           "args": {
//                                             "decoration": {
//                                               "hintText": "name@example.com",
//                                               "labelText": "Your Login",
//                                               "suffixIcon": {
//                                                 "type": "icon_button",
//                                                 "args": {
//                                                   "icon": {
//                                                     "type": "icon",
//                                                     "args": {
//                                                       "icon": {
//                                                         "codePoint": 57704,
//                                                         "fontFamily": "MaterialIcons",
//                                                         "size": 50
//                                                       }
//                                                     }
//                                                   },
//                                                   "onPressed": "${set_value('login','')}"
//                                                 }
//                                               }
//                                             },
//                                             "validators": [
//                                               {
//                                                 "type": "required"
//                                               }
//                                             ]
//                                           }
//                                         },
//                                          {
//                                           "type": "sized_box",
//                                           "args": {
//                                             "height": 16
//                                           }
//                                         },
//                                         {
//                                           "type": "text_form_field",
//                                           "id": "password",
//                                           "args": {
//                                             "decoration": {
//                                               "labelText": "Your Password",
//                                               "suffixIcon": {
//                                                 "type": "icon_button",
//                                                 "args": {
//                                                   "icon": {
//                                                     "type": "icon",
//                                                     "args": {
//                                                       "icon": {
//                                                         "codePoint": 57704,
//                                                         "fontFamily": "MaterialIcons",
//                                                         "size": 50
//                                                       }
//                                                     }
//                                                   },
//                                                   "onPressed": "${set_value('password','')}"
//                                                 }
//                                               }
//                                             },
//                                             "validators": [
//                                               {
//                                                 "type": "required"
//                                               }
//                                             ]
//                                           }
//                                         },
//                                         {
//                                           "type": "sized_box",
//                                           "args": {
//                                             "height": 16
//                                           }
//                                         }
//                                       ]
//                                     }
//                                   }
//                                 }
//                               },
//                               {
//                                 "type": "elevated_button",
//                                 "id": "submit_button",
//                                 "args": {
//                                   "onPressed": "${validateForm('form_context')}",
//                                   "child": {
//                                     "type": "container",
//                                     "args": {
//                                       "alignment": "center",
//                                       "width": "infinity",
//                                       "child": {
//                                         "type": "save_context",
//                                         "args": {
//                                           "key": "form_context",
//                                           "child": {
//                                             "type": "text",
//                                             "args": {
//                                               "text": "Submit"
//                                             }
//                                           }
//                                         }
//                                       }
//                                     }
//                                   }
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };
// let auth_json={};
let profile_json = {
// "type": "column",
// "args": {
//   "mainAxisAlignment": "center",
//   "crossAxisAlignment": "center",
//   "children": [
//     {
//       "type": "text",
//       "args": {
//         "text": "Добро пожаловать, {{formData.first_name}} {{formData.last_name}}!",
//         "style": {
//           "fontSize": 20.0,
//           "fontWeight": "bold"
//         }
//       }
//     }
//   ]
// }
};
// Эндпоинт для приёма сообщений
app.get('/auth', async (req, res) => {
    try {
        const response = await (0, node_fetch_1.default)('https://67f61e0f913986b16fa6c712.mockapi.io/auth');
        const auth_json = await response.json();
        res.status(200).json(auth_json[0]);
    }
    catch (error) {
        console.error('Ошибка при получении JSON:', error);
        res.status(500).json({ error: 'Не удалось получить JSON' });
    }
});
app.post('/auth', async (req, res) => {
    const message = req.body;
    if (message.login == 'admin' && message.password == 'admin') {
        try {
            const response = await (0, node_fetch_1.default)('https://67f61e0f913986b16fa6c712.mockapi.io/main');
            const _profile_json = await response.json();
            profile_json = _profile_json[0];
            res.status(200).json("success");
        }
        catch (error) {
            console.error('Ошибка при получении JSON:', error);
            res.status(500).json({ error: 'Не удалось получить JSON' });
        }
    }
    else {
        res.status(200).json("failure");
    }
});
app.get('/profile', (req, res) => {
    res.status(200).json(profile_json);
});
// app.options('/app_mms_server/api/mms_service/command', (req: Request, res: Response) => {
//   const message = req.body;
//   console.log('Получено сообщение:', message.commandCode);
//     res.status(200).json({url: "ok"})
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
