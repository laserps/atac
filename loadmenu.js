$(function () {
    var data = {
        menu: [
            {
                name: 'form บันทึกการเปลี่ยน tool',
                link: 'index.html',
                sub: null
            }
            ,
            {
                name: 'ตารางแสดงประวัติการ',
                link: 'datatable_tool.html',
                sub: null
            }
            ,{
                name: 'Import File',
                link: 'importfile.html',
                sub: null
            }
            ,{
                name: 'Import Manual',
                link: 'importfilemanual.html',
                sub: null
            }
//            ,
//            {
//                name: 'Back Office',
//                link: '#',
//                sub: [
//                    {
//                        name: 'คำสั่งซื้อ',
//                        link: 'order.html',
//                        sub: null
//                    },{
//                        name: 'ระบบบันทึกการส่งสินค้า',
//                        link: 'order_send.html',
//                        sub: null
//                    },{
//                        name: 'ระบบจัดการสินค้า',
//                        link: 'product.html',
//                        sub: null
//                    },
//                ]
//            }
        ]
    };

    var str = "";
    $.each(data.menu, function (key, value) {

        // <li class="d-flex flex-column active">
        //     <a class="nav-link" href="../widgets/widgets.html">
        //         <i class="nav-icon fas fa-cog"></i>
        //         <p>Widgets</p>
        //     </a>
        // </li>

        if (value.sub == null) {
            str +=
                `<li class="d-flex flex-column">
                <a class="nav-link" href="` + value.link + `">
                    <i class="nav-icon fas fa-sliders-h"></i>
                    <p>` + value.name + `</p>
                </a>
            </li>`;
        } else {
            str +=
                `<li class="d-flex flex-column">
                    <a class="nav-link" href="#tables` + key + `" aria-expanded="true" class="nav-link" data-toggle="collapse">
                        <i class="nav-icon fas fa-cogs"></i>
                        <p>` + value.name + `
                            <i class="fa fa-sort-desc submenu-toggle"></i>
                        </p>
                    </a>
                    <div class="collapse show" id="tables` + key + `" role="navigation" aria-expanded="true">
                        <ul class="nav flex-column ps-container ps-theme-default">`
            $.each(value.sub, function (keyin, valuein) {
                str +=
                            `<li class="d-flex flex-column">
                                <a class="nav-link" href="` + valuein.link + `"><i class="far fas fa-cog"></i> ` + valuein.name + `</a>
                            </li>`;
            });
            str += `    </ul>
                    </div>
                </li></a>
            </li>`;
        }
    });
    $("#menu").append(str);
    str = null;
});