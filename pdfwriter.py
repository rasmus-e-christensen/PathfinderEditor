import math
from enum import Enum
from typing import Dict

from PyPDF2 import PdfFileWriter, PdfFileReader
from PyPDF2.generic import BooleanObject, NameObject, IndirectObject


class AbilityScore(Enum):
    STR = 0
    DEX = 1
    CON = 2
    INT = 3
    WIS = 4
    CHA = 5


# This is need to view the pdf in acrobat
def set_need_appearances_writer(writer: PdfFileWriter):
    # See 12.7.2 and 7.7.2 for more information: http://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf
    try:
        catalog = writer._root_object
        # get the AcroForm tree
        if "/AcroForm" not in catalog:
            writer._root_object.update({
                NameObject("/AcroForm"): IndirectObject(len(writer._objects), 0, writer)})

        need_appearances = NameObject("/NeedAppearances")
        writer._root_object["/AcroForm"][need_appearances] = BooleanObject(True)
        return writer

    except Exception as e:
        print('set_need_appearances_writer() catch : ', repr(e))
        return writer


def setup_writer() -> PdfFileWriter:
    writer = PdfFileWriter()
    set_need_appearances_writer(writer)
    if "/AcroForm" in writer._root_object:
        writer._root_object["/AcroForm"].update(
            {NameObject("/NeedAppearances"): BooleanObject(True)})
    return writer


def setup_reader(file: str) -> PdfFileReader:
    reader = PdfFileReader(open(file, "rb"), strict=False)
    if "/AcroForm" in reader.trailer["/Root"]:
        reader.trailer["/Root"]["/AcroForm"].update(
            {NameObject("/NeedAppearances"): BooleanObject(True)})
    return reader


def save_character_sheet(output_file: str, data: Dict):
    infile = "app/character_sheets/standard/Standard_Character_Sheet.pdf"

    reader = setup_reader(infile)
    writer = setup_writer()

    field_dictionary = reader.getFormTextFields()

    change_form_fields(field_dictionary, data)

    for page in range(reader.getNumPages()):
        writer.addPage(reader.getPage(page))
        writer.updatePageFormFieldValues(writer.getPage(page), field_dictionary)

    with open("app/character_sheets/generated/" + output_file, "wb") as outputStream:
        writer.write(outputStream)


def change_form_fields(formfield: Dict, data:Dict):
    change_ability_scores(formfield, data['ability_scores'])


def change_ability_scores(formfield: Dict, array_of_scores: [int]):
    update_dict = {}
    try:
        # Ability Score change
        update_dict['STRENGTH'] = array_of_scores[AbilityScore.STR.value]
        update_dict['DEXTERITY'] = array_of_scores[AbilityScore.DEX.value]
        update_dict['CONSTITUTION'] = array_of_scores[AbilityScore.CON.value]
        update_dict['INTELLIGENCE'] = array_of_scores[AbilityScore.INT.value]
        update_dict['WISDOM'] = array_of_scores[AbilityScore.WIS.value]
        update_dict['CHARISMA'] = array_of_scores[AbilityScore.CHA.value]

        # Ability Score Modifier change
        update_dict['STR Mod'] = math.floor((array_of_scores[AbilityScore.STR.value] - 10) / 2)
        update_dict['DEX Mod1'] = math.floor((array_of_scores[AbilityScore.DEX.value] - 10) / 2)
        update_dict['DEX Mod2'] = math.floor((array_of_scores[AbilityScore.CON.value] - 10) / 2)
        update_dict['DEX Mod3'] = math.floor((array_of_scores[AbilityScore.INT.value] - 10) / 2)
        update_dict['DEX Mod4'] = math.floor((array_of_scores[AbilityScore.WIS.value] - 10) / 2)
        update_dict['DEX Mod5'] = math.floor((array_of_scores[AbilityScore.CHA.value] - 10) / 2)

        formfield.update(update_dict)
    except KeyError:
        print("Could not find the given key")
        exit()


if __name__ == '__main__':
    save_character_sheet('PathfinderChar.pdf', {"ability_scores": [10, 10, 12, 12, 16, 18]})
