function editElement(ref, match, replacer) {

    ref.textContent = ref.textContent.split(match).join(replacer);

    // const text = ref.textContent;

    // const result = text.split(match).join(replacer);

    // ref.textContent = result;
}