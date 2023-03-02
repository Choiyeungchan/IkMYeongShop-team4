class ImportApi {
    #IMP = null;

    constructor() {
        this.#IMP = window.IMP;
        this.#IMP = init("imp52106714");
        this.addPaymentEvent();
    }

    addPaymentEvent() {
        document.querySelector(".btn_order_buy").onclick = () => {
            this.requestPay();
        }
    }

    requestPay() {
        const pdtName = document.querySelector(".product-name").value;
        const pdtPrice = document.querySelector(".product-price").value;
        const email = document.querySelector(".principal-email").value;
        const name = document.querySelector(".principal-name").value;
        const zoneCode = document.querySelector(".address_postcode").value;
        const addressAll = document.querySelector(".address-all").value;
        const addressDetail = document.querySelector(".address-detail").value;
        const address = addressAll + " " + addressDetail;
        const phone = document.querySelector(".phone-number").value;

        IMP.request_pay({
            pg: "kakaopay",
            pay_method: "card",
            merchant_uid: "PRODUCT_" + new Date().getTime(),
            name: pdtName,
            amount: pdtPrice,
            buyer_email: email,
            buyer_name: name,
            buyer_tel: phone,
            buyer_addr: address,
            buyer_postcode: zoneCode
        }, function (rsp) {
            if(rsp.success) {

            } else {

            }
        });
    }

}


window.onload = () => {
    AddressApi.getInstance().addAddressButtonEvent();
    new ImportApi();
}